import React, {useEffect, useState} from 'react';
import axios from "axios";

const BoardList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  const fetchDatas = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setDatas([]);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://localhost:8081/board/list'
      );
      console.log(response.data);
      setDatas(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  let middleTag = <tr></tr>;
  if (loading) middleTag = <tr>
    <td colSpan="4">로딩중..</td>
  </tr>;
  if (error) middleTag = <tr>
    <td colSpan="4">에러가 발생했습니다</td>
  </tr>;

  return (
    <div className="board-list">
      <div className="common-buttons">
        <button type="button" className="w3-button w3-round w3-blue-gray">등록</button>
      </div>
      <table className="w3-table-all">
        <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
        </thead>
        <tbody>
        {middleTag}
        {
          datas.map(data => (
            <tr key={data.idx}>
              <td>{data.idx}</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.created_at}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;