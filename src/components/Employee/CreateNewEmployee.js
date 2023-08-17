import { Button, Steps, message, theme } from 'antd';
import React from 'react';
import { useState } from 'react';

import RegistrationEmployee from './CreateAccount';
import InputInformationEmployee from './InputInformationEmployee';
import { Link } from 'react-router-dom';

const { Step} = Steps

const steps =[
    {
        title: 'Tạo tài khoản',
        content: 'First-content',
    },
    {
        title: 'Thông tin cá nhân',
        content: 'Second-content',
    },
]



const CreateNewEmployee = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));    

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Steps style={{width: 800, marginTop: 40 }} current={currentStep} items={items}/>
            <div style={{ width: 800, marginTop: 40, textAlign: 'center'}}>
                { currentStep === 0 && <RegistrationEmployee onNext={nextStep}/>}
                { currentStep === 1 && <InputInformationEmployee onPrevious={prevStep} onFinish={nextStep}/>}
            </div>
            
            <div style={{ width: 800, display: 'flex', justifyContent: 'space-between'}}>
                
                {currentStep >= 0 && (
                <Button onClick={() => prevStep()}>
                    Quay về
                </Button>
                )}

                <div>
                    {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={() => nextStep()}>
                        Tiếp
                    </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            <Link to='/tbnv'>Hoàn Thành</Link>
                        </Button>
                    )}
                </div>
            </div>                    
        </div>
    );
}

export default CreateNewEmployee;