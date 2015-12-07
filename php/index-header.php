<?php

/**
 * Globally registers the 'gridicons' plugin
 *
 * This ensures plugin using it is on the latest version of Gridicons, and helps to avoid conflicts.
 */

/* !!!
IF YOU ARE EDITING gridicons.php
THEN YOU ARE EDITING A FILE THAT GETS OUTPUT FROM THE GRIDICONS REPO!
DO NOT EDIT THAT FILE! EDIT index-header.php and index-footer.php instead
OR if you're looking to change now SVGs get output, you'll need to edit strings in the Gruntfile :)
!!! */


function get_gridicon( $gridicon ) {
	$svg = "";

	switch ( $gridicon ) {
