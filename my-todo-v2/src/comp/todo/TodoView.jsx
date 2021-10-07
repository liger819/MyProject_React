// AllList에 buketList와 같이 보이기만할 View
import React from "react";
import { useAllContext } from "../../context/AppContextProvider";

// 객체 배열을 선언하여 List의 제목 배열 만들기
const list_T_title = [{id:0, t_name : "Level"},
						{id:1, t_name : "Start_Date"},
						{id:2, t_name : "Title"},
						{id:3, t_name : "end_Date"},
					];

// 제목 배열을 사용하여 TodoList table의 titie 생성
const list_T_title_view = list_T_title.map((t_title) => {

	return <th key={t_title.id}>{t_title.t_name}</th>;
});

function TodoView() {

	const {todoList} = useAllContext();

	// map을 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
	const T_viewList = todoList.map((t_views) =>{

		return (
				<tr key={t_views.t_id}>
					<td>{t_views.t_level}</td>
					<td>{t_views.t_start_date}</td>
					<td>{t_views.t_text}</td>
					<td>{t_views.t_end_date}</td>
				</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>{list_T_title_view}</tr>
			</thead>

			<tbody>{T_viewList}</tbody>

		</table>
	);
};

export default TodoView