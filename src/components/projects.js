import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

     toggleCategories() {
         if(this.state.activeTab === 0) {
             return(
                 <div className="projects-grid">
                     {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',
                         background: 'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                 </Card>

                 {/* Project 2 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',
                         background: 'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                 </Card>
                 </div>
                 
             )
         } else if (this.state.activeTab === 1) {
             return(
                 <div>
                     <h1>This is NodeJS</h1>
                </div>
             )
         } else if (this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is AngularJS</h1>
               </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div>
                    <h1>This is MongoDB</h1>
               </div>
            )
        }
     }    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Project;