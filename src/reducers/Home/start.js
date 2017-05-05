
import {SHADOW_TRANSITION,HIDE_START} from "src/constants/Home/start";

let initStates = {
	hideStart:false,
	transition:[
		{
			id:"01",
			index:0,
			status:true,
			maskPosition:"",
			track:[],//轨迹记录
			options:{
				xMax:4,
				yMax:3,
				endNum:12,
				msec:60,
				xAttach:0,
				yAttach:-30
			}
		},{
			id:"02",
			index:1,
			status:true,
			maskPosition:"",
			track:[],//轨迹记录
			options:{
				xMax:4,
				yMax:3,
				endNum:12,
				msec:60,
				xAttach:0,
				yAttach:10
			}
		},{
			id:"03",
			index:2,
			status:true,
			maskPosition:"",
			track:[],//轨迹记录
			options:{
				xMax:4,
				yMax:3,
				endNum:12,
				msec:60,
				xAttach:-10,
				yAttach:0
			}
		},{
			id:"04",
			index:3,
			status:true,
			maskPosition:"",
			track:[],//轨迹记录
			options:{
				xMax:4,
				yMax:5,
				endNum:20,
				msec:80,
				xAttach:0,
				yAttach:0

			}
		}
	]
};
function start(state = initStates,action){
	switch(action.type){

		case SHADOW_TRANSITION:

			return Object.assign({},state,{
				transition:state.transition.map((item)=>{

					return (
						item.id != action.data.id ? item : Object.assign({},item,action.data, { track : [].concat(item.track,[action.data.maskPosition]) })
					);

				})
			});

		//隐藏启动页
		case HIDE_START:
			console.log("隐藏启动页");
			let hideStart = true;
			return Object.assign({},state,{hideStart});
			
		default:
			return state;
	};
};

export default start;


