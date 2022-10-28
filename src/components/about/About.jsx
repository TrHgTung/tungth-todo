import React from 'react'
import "./about.css";

function About() {
    return (
        <>
            <div className='heading_top-center'>
                <h2>Giới thiệu</h2>
            </div>
            <div className='content_body-center'>
                <table>
                    <tr className='table-container'>
                        <td className='table-col-title'>
                            Họ tên:
                        </td>
                        <td className='table-col-info'>
                            Trịnh Hoàng Tùng
                        </td>

                    </tr>
                    <tr className='table-container'>
                        <td className='table-col-title'>
                            MSSV:
                        </td>
                        <td className='table-col-info'>
                            46.01.104.211
                        </td>
                    </tr>

                    <tr className='table-container'>
                        <td className='table-col-title'>
                            E-mail liên hệ:
                        </td>
                        <td className='table-col-info'>
                            4601104211@student.hcmue.edu.vn
                        </td>
                    </tr>

                    <tr className='table-container'>
                        <td className='table-col-title'>
                            Github cá nhân:
                        </td>
                        <td className='table-col-info'>
                            github/@TrHgTung
                        </td>
                    </tr>

                    <tr className='table-container'>
                        <td className='table-col-title'>
                            Trường ĐH Sư Phạm TPHCM
                        </td>
                        <td className='table-col-info'>
                            - Khoa Công nghệ thông tin
                        </td>
                    </tr>
                </table>

            </div>
        </>
    )
}

export default About