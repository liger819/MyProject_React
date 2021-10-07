// AllList에 TodotList와 같이 보이기만할 View
import React from "react";
import { useAllContext } from "../../context/AppContextProvider";

// 객체 배열을 선언하여 List의 제목 배열 만들기
const list_B_title = [{id:0, B_name : "Level"},
						{id:1, B_name : "Start_Date"},
						{id:2, B_name : "Title"},
						{id:3, B_name : "end_Date"},
					];

// 제목 배열을 사용하여 BuketList table의 titie 생성
const list_B_title_view = list_B_title.map((B_title) => {

	return <th key={B_title.id}>{B_title.B_name}</th>;
});

function buketView() {

	const {buketList} = useAllContext();

	// map을 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
	const B_viewList = buketList.map((b_views) =>{

		return (
				<tr key={b_views.b_id}>
					<td>{b_views.b_level}</td>
					<td>{b_views.b_start_date}</td>
					<td>{b_views.b_text}</td>
					<td>{b_views.b_end_date}</td>
				</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>{list_B_title_view}</tr>
			</thead>

			<tbody>{B_viewList}</tbody>

		</table>
	);
};

export default buketView