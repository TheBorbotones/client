import React from 'react';
import { Row, Col, Input } from 'antd';

export const User = () => {

    return (
        <div>
         <Row>
            <Col span={8}>
                <Input placeholder="Basic usage" />
            </Col>
            <Col span={8}>
                <Input placeholder="Basic usage" />
            </Col>
            <Col span={8}>
                <Input placeholder="Basic usage" />
            </Col>
         </Row>
         <Row>
         <Col span={24}>
            </Col>
         </Row>
        </div>
    
        
    )

}