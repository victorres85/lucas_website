import { useState } from "react";
import Modal from './Modals/Modal'

function Publicidade() {
    const [openModal, setOpenModal] = useState(false);
    const [linkVideo, setLinkVideo] = useState('');

    return (
        <div className='publicidade_root'>
            <div className='publicidade_body'>
                <div className='publi_list'>
                    <ul>
                        <li className='grid-item-1'>
                            <img id='item-1' className='img_move' data-video-link='item-1'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/ljwtnHUnOpw')}
                                src="https://tse1.mm.bing.net/th?id=OIP.KRDXVIDQh58FyCzeWRV2jAHaKi&pid=Api&P=0&w=122&h=173" alt=""></img></li>
                        <li className='grid-item-2'>
                            <img id='item-2'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/W7-TapGv-CQ')}
                                data-video-link='item-2'
                                src="https://tse3.mm.bing.net/th?id=OIP.iiNSdtlTfIksFCStwuqEKQHaKZ&pid=Api&P=0&w=300&h=300"
                                alt=""></img></li>
                        <li className='grid-item-3'>
                            <img id='item-3'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/uiwpWx5nGHI')}
                                data-video-link='item-3'
                                src="https://tse4.mm.bing.net/th?id=OIP.YUVGxJdqNxT4NdWPq7hgHAHaKT&pid=Api&P=0&w=126&h=176"
                                alt=""></img></li>
                        <li className='grid-item-4'>
                            <img id='item-4'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/O-QGK4LXWW0')}
                                src="https://tse1.mm.bing.net/th?id=OIP.GxK5g9AKfaRXrUDoII5jfAAAAA&pid=Api&P=0&w=109&h=164"
                                alt=""></img></li>
                        <li className='grid-item-5'>
                            <img id='item-5'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/GJDNkWS1Szw')}
                                data-video-link='item-5'
                                src="https://tse4.mm.bing.net/th?id=OIP.MMxSQ1rBFPYOHJiVNQbD3QAAAA&pid=Api&P=0&w=100&h=164"
                                alt=""></img></li>
                        <li className='grid-item-6'>
                            <img id='item-6'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/1ozdRwHrMlE')}
                                data-video-link='item-6'
                                src="https://tse4.mm.bing.net/th?id=OIP.X7OKyOWHoQzBzp2-_cStPgHaJQ&pid=Api&P=0&w=139&h=173"
                                alt=""></img></li>
                        <li className='grid-item-7'>
                            <img id='item-7'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/IhsecLVir8s')}
                                data-video-link='item-7'
                                src="https://tse3.mm.bing.net/th?id=OIP.6-g9SGkt2QB8lbjvh9kXbwAAAA&pid=Api&P=0&w=122&h=163"
                                alt=""></img></li>
                        <li className='grid-item-8'>
                            <img id='item-8'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/D6VwelCZsuk')}
                                data-video-link='item-8'
                                src="https://tse3.explicit.bing.net/th?id=OIP.lx5LNDQNw7TLJopHXUoFzAAAAA&pid=Api&P=0&w=125&h=165"
                                alt=""></img></li>
                        <li className='grid-item-9'>
                            <img id='item-9'
                                className='img_move'
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                onMouseOver={() =>
                                    setLinkVideo('https://www.youtube.com/embed/3QIX3Nnm1mw')}
                                data-video-link='item-9'
                                src="https://tse2.mm.bing.net/th?id=OIP.PP2QRhakz8QpWCqfiekCrwHaLH&pid=Api&P=0&w=112&h=168"
                                alt=""></img></li>

                    </ul>
                </div>
            </div>
            {openModal && < Modal closeModal={setOpenModal} videoLink={linkVideo} />}
        </div >
    )
}
export default Publicidade;