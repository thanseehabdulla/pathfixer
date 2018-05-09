Path Fixer
=========

A small library that seperates '..' from paths

## Installation

  `npm install @thanseeh_abdulla/pathfixer-ats`

## Usage

    var pathFormatter = require('@thanseeh_abdulla/pathfixer-ats');

    var formattedPath = pathFormatter('/opt/lamp/../lamp/..');
  
  
  Output should be `/lamp`

