import { Component } from 'preact';
import { route } from 'preact-router';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Toolbar/style.css';

export default class Header extends Component {
    closeDrawer = () => { this.drawer.MDComponent.open = false; }
    openDrawer = () => (this.drawer.MDComponent.open = true);
    drawerRef = drawer => (this.drawer = drawer);
    linkTo = path => () => { 
        route(path);
        this.closeDrawer();
    };
    render() {
        return (
            <div>
                <Toolbar className="toolbar">
                    <Toolbar.Row>
                        <Toolbar.Section align-start={true}>
                            <Toolbar.Icon menu={true} onClick={this.openDrawer}>menu</Toolbar.Icon>
                            <Toolbar.Title>AvaGo Smart Camera</Toolbar.Title>
                        </Toolbar.Section>
                    </Toolbar.Row>
                </Toolbar>
                <Drawer.TemporaryDrawer ref={this.drawerRef}>
                    <Drawer.DrawerHeader>AvaGo Smart Camera</Drawer.DrawerHeader>
					<Drawer.DrawerContent>
						<List>
							<List.LinkItem onClick={this.linkTo('/')}>Home</List.LinkItem>
							<List.LinkItem onClick={this.linkTo('/camera')}>Camera</List.LinkItem>
							<List.LinkItem onClick={this.linkTo('/list')}>List</List.LinkItem>
						</List>
					</Drawer.DrawerContent>				
                </Drawer.TemporaryDrawer>
            </div>
        );
    }
}
