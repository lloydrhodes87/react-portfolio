import React, { useEffect, useState } from 'react';
import './project.styles.scss';
import ProjectDetail from '../projectDetail/projectDetail.component';
import Modal from 'react-modal'

const PortfolioProject = ({project}) => {

    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '500px',
            height: '500px',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [showDetail, setShowDetail] = useState(false)
    Modal.setAppElement('#root');
    
    const handleCancelModal = () => {
        setShowDetail(false)
    }


    console.log('project', project)

    const name = project === null ? '' : project.name;

    return (
        
        <div className='portfolio-piece-container'>
            <button onClick={() => setShowDetail(true)}>{name}</button>
            <Modal isOpen={showDetail} style={customStyles}>
                <div className='sign-in-modal'>
                    <ProjectDetail handleCancelModal={handleCancelModal} project={project}/>
                </div>
            </Modal>
        </div>
    )
}

export default PortfolioProject;