import { createContext, useContext, useState } from "react";
import UUID from "react-uuid";

import moment from "moment";

const AppContext = createContext();

// 함수내부에서 단 한줄의 return 만 있을 경우 모두 생략 가능함
export const useAllContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {

	// todoList 한개의 데이터를 입력
	const [ todo, setTodo ] = useState({

		t_id: UUID(),
		t_level: 0,
		t_start_date : moment().format("YYY[-]MM[-]DD HH:mm:ss"),
		t_text: "TODO 1개의 데이터 입력",
		t_end_date: "",
		t_end_check: false,
		t_Complete: false,

	});

	// buketList 한개의 데이터를 입력
	const [ buket, setBuket ] = useState({

		b_id: UUID(),
		b_level: 0,
		b_start_date : moment().format("YYY[-]MM[-]DD HH:mm:ss"),
		b_text: "Buket 1개의 데이터 입력",
		b_end_date: "",
		b_end_check: false,
		b_Complete: false,

	});

	// todoList 여러개의 데이터 입력
	const [ todoList, setTodoList ] = useState([
		{
			t_id: UUID(),
			t_level: 0,
			t_start_date : moment().format("YYY[-]MM[-]DD HH:mm:ss"),
			t_text: "TODOList 여러개의 데이터",
			t_end_date: "",
			t_end_check: false,
			t_Complete: false,
		},

	]);

	// buketList 여러개의 데이터 입력
	const [ buketList, setBuketList ] = useState([
		{
			b_id: UUID(),
			b_level: 0,
			b_start_date : moment().format("YYY[-]MM[-]DD HH:mm:ss"),
			b_text: "BuketList 여러개의 데이터",
			b_end_date: "",
			b_end_check: false,
			b_Complete: false,
		},

	]);


	// 데이터 간소화
	const propsDate = { todo, setTodo, 
						todoList, setTodoList,

						buket, setBuket,
						buketList, setBuketList

					}
	
	return (
		<AppContext.Provider value={propsDate}>
			{children}
		</AppContext.Provider>
	);

};

export default AppContextProvider