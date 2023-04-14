import {chains} from "$lib/configs/chains";

export const getChainNames = ()=>{
    return chains.map(s=>s.label);
}