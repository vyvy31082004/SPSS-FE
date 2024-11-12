import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
export default function FileUploader ()  {
    const navigate=useNavigate();
    return (
            <div className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h1>CHỌN TỆP</h1>
                    <h4>Phan Thảo Vy</h4>
                </div>
                <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                    <div className="d-flex justify-content-between mb-2"> 
                        <h5>Danh sách tệp đã tải lên</h5>
                        <div className='btn btn-secondary'>
                            <i class="bi bi-cloud-arrow-up pe-2"></i>
                            Tải tệp
                        </div>
                        
                        <div className='btn btn-secondary'>Gần nhất</div>
                       
                        
                    </div>
                    <hr />
                    
                    <div className="d-flex justify-content-between">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Tên tệp</th>
                                <th scope="col">Số trang</th>
                                <th scope="col">Kích thước</th>
                                <th scope="col">Loại tệp </th>
                                
                        
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>BTVN</td>
                                <td>10</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                                <tr>
                                <td>CNPM</td>
                                <td>2</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                                <tr>
                                <td>HDC</td>
                                <td>1</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                            </tbody>
                    </table>
                    
                    </div>
                </section>
                <div className="d-flex justify-content-end mb-2"> 
                    <div className='btn btn-secondary'>Tiếp theo</div>
                    <div className='btn btn-secondary1'>Trở về</div>
                </div>
            </div>
        

    );
};