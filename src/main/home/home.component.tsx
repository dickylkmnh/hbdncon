import React, { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import styles from './home.module.scss';

const targetTimeToHbd = moment("2021-12-25");

export const HomeComponent: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [hidden, setHidden] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);

    const timeBetween = moment.duration(targetTimeToHbd.diff(currentTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
            if (timeBetween.days() === 3 && timeBetween.hours() === 8 && timeBetween.minutes() === 25 && timeBetween.seconds() === 10) {
                setHidden(true)
                setShowModal(true)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timeBetween]);


    return (
        <React.Fragment>
            <div className={styles.home_full_screen}>
                <div className={styles.home_countdown_wrapper_header}>
                    <div className="row">
                        <div className="col-12">
                            <iframe width="100%" height="100" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649690937&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" id='videoAudioIFrame' title='hbd' />
                        </div>
                    </div>
                </div>
                <Modal
                    dialogClassName="modal-40w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showModal}
                >
                    <Modal.Body>
                        {!right && (
                            <div>
                                {!left && (
                                    <div>
                                        <div className={styles.home_modal_title}>penasaran ya?</div>
                                        <div className={styles.home_modal_sub_title + ' mt-4'}>pilih kiri atau pilih kanan ?</div>
                                    </div>
                                )}
                                {left && (
                                    <div className={styles.home_modal_sub_title + ' mt-4'}>salah harusnya pilih kanan</div>
                                )}
                                <div className="text-center mt-4">
                                    {!left && (
                                        <Button
                                            variant="warning"
                                            onClick={() => setLeft(true)}
                                        >kiri</Button>
                                    )}
                                    {' '}
                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            setRight(true)
                                        }}
                                        disabled={!left}
                                    >kanan</Button>
                                </div>
                            </div>
                        )}
                        {right && (
                            <div className='text-center'>
                                <a
                                    href="https://drive.google.com/file/d/1JGsnDJFAqn9UTdH3NKRE38Mz8XnrC_Ut/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setShowModal(false)}
                                >
                                    Clik Disini
                                </a>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
                {hidden
                    ?
                    <div>
                        <div className={styles.home_heading_text}>HBD for <span className={styles.home_text_highlight}>sonia`s</span></div>
                        <a
                            href="https://drive.google.com/file/d/1JGsnDJFAqn9UTdH3NKRE38Mz8XnrC_Ut/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setShowModal(false)}
                        >
                            Clik Disini
                        </a>
                    </div>
                    :
                    <>
                        <div>
                            <div className={styles.home_heading_text}>Countdown for <span className={styles.home_text_highlight}>sonia`s</span> birthday</div>
                        </div>
                        <div className={styles.home_countdown_wrapper}>
                            <div className={styles.home_countdown_box}>
                                <span>{timeBetween.days()}</span>
                                <span className={styles.home_countdown_legend}>Days</span>
                            </div>
                            <div className={styles.home_countdown_box}>
                                <span>{timeBetween.hours()}</span>
                                <span className={styles.home_countdown_legend}>Hours</span>
                            </div>
                            <div className={styles.home_countdown_box}>
                                <span>{timeBetween.minutes()}</span>
                                <span className={styles.home_countdown_legend}>Minutes</span>
                            </div>
                            <div className={styles.home_countdown_box}>
                                <span>{timeBetween.seconds()}</span>
                                <span className={styles.home_countdown_legend}>Seconds</span>
                            </div>
                        </div>
                    </>
                }
            </div>
        </React.Fragment>
    )
}