import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import axios from 'axios';
// import axios from 'axios';
const cx = classNames.bind(styles);
export default function Slidebar() {
    const a = '';
    async function handleOnclick() {
        try {
            const data = await fetch('https://sv.ut.edu.vn/tra-cuu-thong-tin.html', {
                method: 'POST',
                body: JSON.stringify({
                    MaSinhVien: '1951120124',
                    NgaySinh: '02/09/2001',
                }),
                headers: {
                    // 'Access-Control-Allow-Origin': '*',
                    // 'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                },

                mode: 'no-cors',
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    // const handleOnclick = async () => {
    //     const headers = {
    //         'Content-Type': 'text/html; charset=utf-8',
    //           Authorization: `Bearer `,
    //     };
    //     axios.defaults.baseURL = 'https://sv.ut.edu.vn/tra-cuu-thong-tin.html';
    //     await axios
    //         .post(
    //             ' https://sv.ut.edu.vn/tra-cuu-thong-tin.html',
    //             {
    //                 MaSinhVien: '1951120124',
    //                 NgaySinh: '02/09/2001',
    //             },
    //             headers,
    //         )
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };
    return (
        <aside className={cx('wrapper')}>
            {
                <>
                    <button onClick={handleOnclick}>Xem điểm</button>
                </>
            }
        </aside>
    );
}
<></>;
