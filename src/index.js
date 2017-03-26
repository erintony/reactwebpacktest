import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'

class App extends Component {
	render() {
		return(
			<div className="todo-header form-group"> 
				<input className="form-control" 
					type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
