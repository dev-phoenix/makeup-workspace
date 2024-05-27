class GridTools{
    items=[];
    centerLine=0;
    containerBorder=0;
    boxBorder=0;
    gridval=0;
    version=0;
    tools=0;
    name='gridTools';
    _log=false;
    constructor(){
        window.addEventListener('load', this.init.bind(this))
        //this.init();
    };
    init(){
        this.getTools();
        this.setTools();
        this.initTools();
        this.log('',this)
    };
    initTools(){
        let grids = document.querySelectorAll('input[name="grid_cols_view"],#grid_center_view,#grid_container_view,#grid_box_view,#grid_version_view,#grid_tools_view')
        grids.forEach(el=>{el.addEventListener('change',this.update.bind(this))})
    }
    setTools(){
        this.load();
        // this.log('setTools',this)
        // this.log('this.gridval',this.gridval)
        let gactive = document.querySelector(`[value="${this.gridval}"]`)
        gactive.checked=true;

        let line = document.querySelector('#grid_center_view')
        let container = document.querySelector('#grid_container_view')
        let box = document.querySelector('#grid_box_view')
        let version = document.querySelector('#grid_version_view')
        let tools = document.querySelector('#grid_tools_view')

        if(line) line.checked = !!this.centerLine;
        if(container) container.checked = !!this.containerBorder;
        if(box) box.checked = !!this.boxBorder;
        if(version) version.checked = !!this.version;
        if(tools) tools.checked = !!this.tools;
        this.save();
    }
    getTools(){
        let grid = document.querySelector('input[name="grid_cols_view"]:checked')
        this.log('grid',grid)
        if(grid) this.gridval = grid.value

        let line = document.querySelector('#grid_center_view:checked')
        let container = document.querySelector('#grid_container_view:checked')
        let box = document.querySelector('#grid_box_view:checked')
        let version = document.querySelector('#grid_version_view:checked')
        let tools = document.querySelector('#grid_tools_view:checked')

        this.centerLine = !!line?1:0;
        this.containerBorder = !!container?1:0;
        this.boxBorder = !!box?1:0;
        this.version = !!version?1:0;
        this.tools = !!tools?1:0;

        this.log('getTools !!box',!!box)
        this.log('getTools this.boxBorder',this.boxBorder)
        // this.log('getTools',this)
    }
    save(){
        this.log(this.name,'save')
        let mem = {}
        mem.centerLine = this.centerLine;
        mem.containerBorder = this.containerBorder;
        mem.boxBorder = this.boxBorder;
        mem.grid = this.gridval;
        mem.version = this.version;
        mem.tools = this.tools;
        localStorage.setItem(this.name,JSON.stringify(mem))
        this.log('save localStorage',localStorage.getItem(this.name))
    }
    load(){
        let mem = {}
        let _mem = localStorage.getItem(this.name);
        if(_mem) mem = JSON.parse(_mem);
        this.items = mem;
        // this.log('mem', mem)
        if('centerLine' in mem) this.centerLine = mem.centerLine;
        if('containerBorder' in mem) this.containerBorder = mem.containerBorder;
        if('boxBorder' in mem) this.boxBorder = mem.boxBorder;
        if('grid' in mem) this.gridval = mem.grid;
        if('version' in mem) this.version = mem.version;
        if('tools' in mem) this.tools = mem.tools;
        this.log('load mem.boxBorder',mem.boxBorder,('boxBorder' in mem))
        this.log('load this.boxBorder',this.boxBorder)
    }
    update(){
        this.getTools();
        this.save();
    }
    log(...log){
        if(this._log)console.log(...log)
    }
};
var gts = new GridTools();