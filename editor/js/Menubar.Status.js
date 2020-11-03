import * as THREE from '../../build/three.module.js';

import { UIPanel, UIText, UIRow, UISelect } from './libs/ui.js';
import { UIBoolean } from './libs/ui.three.js';

function MenubarStatus( editor ) {

	var strings = editor.strings;
	var config = editor.config;

	var container = new UIPanel();
	container.setClass( 'menu right' );
	container.setDisplay( 'flex' );

	var autosave = new UIBoolean( editor.config.getKey( 'autosave' ), strings.getKey( 'menubar/status/autosave' ) );
	autosave.text.setColor( '#fff' );
	autosave.onChange( function () {

		var value = this.getValue();

		editor.config.setKey( 'autosave', value );

		if ( value === true ) {

			editor.signals.sceneGraphChanged.dispatch();

		}

	} );

	var options = {
		ru: 'Русский',
		en: 'English'
	};

	var languageRow = new UIRow();

	var language = new UISelect();
	language.setOptions( options );
	language.setBackground( 'none' );
	language.setColor( '#fff' );

	if ( config.getKey( 'language' ) !== undefined ) {

		language.setValue( config.getKey( 'language' ) );

	}

	language.onChange( function ( ) {

		var value = this.getValue();

		editor.config.setKey( 'language', value );

		location.reload();

	} );

	languageRow.add( language );

	container.add( autosave );
	container.add( languageRow );

	editor.signals.savingStarted.add( function () {

		autosave.text.setTextDecoration( 'underline' );

	} );

	editor.signals.savingFinished.add( function () {

		autosave.text.setTextDecoration( 'none' );

	} );

	return container;

}

export { MenubarStatus };
