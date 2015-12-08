<?php

/**
 * Globally registers the 'gridicons' plugin
 *
 * This ensures plugin using it is on the latest version of Gridicons, and helps to avoid conflicts.
 */

/* !!!
IF YOU ARE EDITING gridicons.php
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE GRIDICONS REPO!
DO NOT EDIT THAT FILE! 
Edit index-header.php and index-footer.php in the Gridicons repo instead
OR if you're looking to change how SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */


function get_gridicon( $gridicon ) {
	$svg = "";

	switch ( $gridicon ) {
