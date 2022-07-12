import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Patient from "../component/Patient";
import Navigation from "../component/navigate/Navigation";
import {items} from "../component/values";

type Style = {
    rotate: string,
    translate: string,
}

export interface ItemNavigation {
    id: number;
    pathImg: string,
    content: string
    style: Style;
}

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Test App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.h1}>
                    А вдруг СМА?
                </h1>
                <h2 className={styles.h2}>
                    Выберите, кто Ваш пациент:
                </h2>
                <div className={styles.wrap}>
                    <div className={styles.patient_wrap}>
                        <Patient name={"Взрослый"} pathImg={"/patient_1.png"}>
                            <p className={styles.group}>
                                Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.
                            </p>
                            <p className={styles.group}>
                                По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы,
                                но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные
                                навыки.
                            </p>
                            <p className={styles.group}>
                                По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным
                                для распознавания.
                            </p>
                        </Patient>
                        <Patient name={"Ребенок"} pathImg={"/patient_2.png"}>
                            <p className={styles.group}>
                                Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                                движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                                осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                                в отношении наличия СМА.
                            </p>
                            <p className={styles.group}>
                                Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и
                                обеспечение
                                терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                                дегенерации при прогрессировании заболевания
                            </p>
                        </Patient>
                    </div>
                    <div className={styles.massage}>
                        Сообщает ли один из ваших пациентов о следующих симптомах? <span>(нажмите на любую иконку и узнайте больше)</span>
                    </div>
                </div>
                <Navigation items={items}/>
            </main>
        </div>
    )
}

export default Home
