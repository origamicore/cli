#!/usr/bin/env node
import cli from "commander";
import fs from 'fs'
import Files from "./src/files";
import Log, { Colors } from "./src/log";
import Name from "./src/name";
import UI from "./src/ui/Ui";
import Project from "./src/project/Project";
import LocalServer from "./src/local/LocalServer";
import DevService from "./src/dev/devService";
import RuntimeType from "./src/dev/runtimeType";
const { exec,spawn  } = require('child_process');
var pjson = require('../package.json');
class OriCli
{
    dir:string='';
    constructor()
    {
        
        var method=process.argv[2];
        var defaultVar=process.argv[3];
        this.dir=process.cwd(); 
        if(method=='--addmodule'|| method=='-a')
        {
            Log('OcCli v'+pjson.version);
            Project.addModule(defaultVar,this.dir);
        }
        else if(method=='dev')
        {
            Log('Version '+pjson.version,Colors.Green)
            DevService.runProject(RuntimeType.Nodes)
        }
        else if(method=='bun')
        {
            Log('Version '+pjson.version,Colors.Green)
            DevService.runProject(RuntimeType.Bunjs)
        }
        else if(method=='--version' || method=='-v')
        {
            Log('Version '+pjson.version,Colors.Green)

        }
        else if(method=='--new' || method=='-n')
        {
            Log('OcCli v'+pjson.version);
            Project.createProject(defaultVar,this.dir)
            // this.createProject(defaultVar);
        }
        else if(method=='--help' || method=='-h')
        {
            Log('OcCli v'+pjson.version);
            this.printHelp()
        }
        else if(method=='--connect' || method=='-c')
        {
            Log('OcCli v'+pjson.version);
            UI.connect(defaultVar)
        }
        else if(method=='--ui' || method=='-u')
        {
            Log('OcCli v'+pjson.version);
            new LocalServer(parseInt(defaultVar??'4000'))
        }
        else
        {
            Log('OcCli v'+pjson.version);
            Log('Wrong arg',Colors.Red);
            this.printHelp()
        }
    }
    printHelp()
    {
        Log('Example usage')
        Log('   $ occli <cammand> <options>')
        Log('')
        Log('Commands')
        Log('   --new,-n {{project name}}         create new project')
        Log('   --addmodule,-a {{module name}}    create new module')
        Log('   --version,-v                      get occli version')
        Log('   --connect,-c                      connect to UI server')
        Log('   --ui,-u  {{port}}                 open UI')
        Log('   dev                               Run as Developer')
        Log('   bun                               Run as Bunjs')
        Log('')
    }
}
new OriCli();