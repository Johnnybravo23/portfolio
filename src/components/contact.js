import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Johnny Bravo</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>evr got dt filng wn u lv sum1 so much evn thou ur dwn n strtd filng dt de gal dsrv mre bt ur gvng les jst only ur heart,n cum up de situaxn wr many guys a aftr de chick n ur deeply inlv wit de chick n scared of loosing ha..its so painful lvng sum1 wn ur gvng al u hv bt she aint meetng u half way bt u gatta go al de way 2 ha</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                    <div className="contact-list">
                    <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" arial-hidden="true"/>
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>
                           
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" arial-hidden="true"/>
                                    (123) 456-7890
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" arial-hidden="true"/>
                                    underscoreplk@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" arial-hidden="true"/>
                                    MySkypeID
                                </ListItemContent>
                            </ListItem>

                        </List>
                    </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;