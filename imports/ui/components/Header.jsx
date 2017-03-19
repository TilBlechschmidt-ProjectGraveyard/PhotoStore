import React from 'react';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <header className='Header'>
                <AppBar
                    title={<span style={styles.title}>Title</span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton label="Save" />}
                />

            </header>
        );
    }
}

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};


const AppBarExampleIconButton = () => (
    <AppBar
        title={<span style={styles.title}>Title</span>}
        onTitleTouchTap={handleTouchTap}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
    />
);