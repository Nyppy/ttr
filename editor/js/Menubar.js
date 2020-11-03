import { UIPanel } from './libs/ui.js';

import { MenubarAdd } from './Menubar.Add.js';
import { MenubarEdit } from './Menubar.Edit.js';
import { MenubarFile } from './Menubar.File.js';
// import { MenubarExamples } from './Menubar.Examples.js';
import { MenubarSetting } from './Menubar.Settings.js';

import { MenubarPlay } from './Menubar.Play.js';
import { MenubarStatus } from './Menubar.Status.js';


function Menubar( editor ) {

	var container = new UIPanel();
	container.setId( 'menubar' );

	container.add( new MenubarFile( editor ) );
	container.add( new MenubarEdit( editor ) );
	container.add( new MenubarAdd( editor ) );
	// container.add( new MenubarExamples( editor ) );
	container.add( new MenubarSetting( editor ) )
	container.add( new MenubarStatus( editor ) );

	container.add( new MenubarPlay( editor ) );

	return container;

}

export { Menubar };