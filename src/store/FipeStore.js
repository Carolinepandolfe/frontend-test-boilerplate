import { action, observable, computed, decorate } from "mobx";
import remotedev from "mobx-remotedev";
import api from '../config/api';
import { useEffect } from "react";
import axios from "axios";

const _defaultInitialState = {

}

const Fipe = () => {
    


    useEffect(() => {
        axios.get(api)
        .then(response => {
            console.log(response.data)
        })
    }, []);
}


