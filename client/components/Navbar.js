import styles from "../styles/Navbar.module.css"
import {Nav, Item} from 'react-bootstrap'
import Head from "next/head";

function Navbar() {
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Moon+Dance&family=Oswald:wght@200;700&family=Roboto:wght@100&display=swap" 
                rel="stylesheet" />
            </Head>
            <Nav className={styles.bapak} activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/todos">Todo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/start">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Navbar;