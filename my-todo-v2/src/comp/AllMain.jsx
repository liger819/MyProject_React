import {Route} from "react-router-dom"
import AppContextProvider from "../context/AppContextProvider";

import TodoView from "./todo/TodoView";
import Buktview from "./buket/buketView";

function AllMain() {

	return (
		<AppContextProvider>
			<Route path="/" exact>
				<TodoView/>
			</Route>

			<Route path="/todo/list" exact>
				여기는 todo
			</Route>

			<Route path="/buket/list" exact>
				여기는 buket
			</Route>
		</AppContextProvider>
	);
};

export default AllMain