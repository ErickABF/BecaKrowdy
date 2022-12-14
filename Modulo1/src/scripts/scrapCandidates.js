import { searchSelectors } from "../config/scrapperSelectors";
import { $, $$ } from "../utils/selectors";
import { waitForScroll, waitForSelector } from "../utils/waitFor";

async function init (){
    
    await waitForSelector(searchSelectors.paginateResultsContainer)
    await waitForScroll()

    const URLsCandidates = $$(searchSelectors.paginateResultsContainer).map(element=>$('.app-aware-link', element).href);
    /* console.log(URLsCandidates) */
    const port = chrome.runtime.connect({ name: 'secureChannelScrap' });
    port.postMessage({ URLsCandidates });

}

init()
