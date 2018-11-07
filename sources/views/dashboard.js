import dashline 	from "views/modules/dashline";       //仪表线
import visitors 	from "views/modules/visitors";          //游客
import orders 		from "views/modules/orders";           //命令
import messages 	from "views/modules/messages";         //信息
import revenue 		from "views/modules/revenue";          //收入
import tasks 		from "views/modules/tasks";            //任务
import map 			from "views/modules/map";              //地图



//这个页面是 仪表盘页面 
const layout = {
	type: "clean",
	rows:[
		dashline,
		{
			type: "space",
			rows:[
				{
					height: 220,
					type: "wide",
					cols: [
						visitors,
						orders
					]
				},
				{
					type: "wide",
					cols: [
						messages,
						revenue

					]
				},
				{
					type: "wide",
					cols: [
						tasks,
						map
					]
				}
			]

		}
	]
};

export default layout;