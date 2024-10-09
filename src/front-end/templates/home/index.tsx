import {Fragment} from "react";
import styles from "./home.module.css"
import HeaderHome from "@/src/front-end/organisms/header-home";
import ContainerFruitsCards from "@/src/front-end/organisms/container-fruits-cards";
import BannerAgrocidade from "@/src/front-end/atoms/banner-agrocidade";
import WorkSection from "@/src/front-end/organisms/work-section";

export default function Home() {
    return (
        <Fragment>
            <div className={styles.containerHome}>
                <HeaderHome statusNavigation={25}/>
                <ContainerFruitsCards/>
                <BannerAgrocidade/>
                <WorkSection/>
            </div>
        </Fragment>
    )
}