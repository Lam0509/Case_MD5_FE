import React, { useRef, useState } from 'react';
import styles from '../../../styles/admin/FileUploadButton.module.css';
import PropTypes from 'prop-types';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = props.image ? useState([{
        src: props.image
    }]) : useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
            file.src = reader.result;
            const updatedList = [file];
            setFileList(updatedList);
            props.onFileChange(updatedList);
            }
        )
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div
                style={{float: "right"}}
                ref={wrapperRef}
                className={styles.dropfileinput}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className={styles.dropfileinputlabel} >
                    <CloudUploadOutlinedIcon style={{fontSize: '60px', color: "dodgerblue"}}/>
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className={styles.dropfilepreview} style={{float: "left"}}>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className={styles.dropfilepreviewitem}>
                                    <img src={item.src} alt="" />
                                    <span className={styles.dropfilepreviewitemdel} onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <>
                        <div className='d-flex align-items-center justify-content-center' style={{width: '300px', height: '200px', borderRadius: '20px', border: '1px solid'}}>
                            Choose an image for your product
                        </div>
                    </>
                )
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;