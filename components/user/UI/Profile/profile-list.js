import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {authActions} from "../../../../features/auth/authSlice";
import {useRouter} from "next/router";


export default function ProfileMenu() {

    const router = useRouter()

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(authActions.loggedOut());
        router.push("/home");
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div style={{zIndex: 9999}}>
                <i className="ri-user-line fs-6"
                   style={{cursor: "pointer"}}
                   ref={anchorRef}
                   id="composition-button"
                   aria-controls={open ? 'composition-menu' : undefined}
                   aria-expanded={open ? 'true' : undefined}
                   aria-haspopup="true"
                   onClick={handleToggle}
                ></i>
                {/*</Button>*/}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper >
                                <ClickAwayListener onClickAway={handleClose}  >
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <Link href='/profile' style={{textDecoration: 'none', color: 'black'}}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        </Link>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}