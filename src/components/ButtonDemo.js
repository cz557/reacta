import {Button} from 'antd';

import React, { Component } from 'react';

class ButtonDemo extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}

export default ButtonDemo;