import 'regenerator-runtime/runtime'
import { useContext, useState } from "react"
import { FieldValues } from "react-hook-form"
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition"
import { UserContext } from '../../contexts/UserContext'

export const SearchBar = ({register}: FieldValues) => {

    const { transcript, browserSupportsSpeechRecognition} = useSpeechRecognition()

    const { search }: any = useContext(UserContext)


    if (!browserSupportsSpeechRecognition) {
        return (<p>Seu navegador não suporta esta pesquisa por audio</p>)
    }

    const [buttonVoiceSearch, setButtonVoiceSearch] = useState<boolean>(true)

    const searchByVoice = () => {
        setButtonVoiceSearch(false)
        SpeechRecognition.startListening()
    }

    const searchText = transcript.split(' ').join('')

    const stopListening = async () => {
        setButtonVoiceSearch(true)
        SpeechRecognition.stopListening()

        search({search: searchText})
    }

    return (
        <div className='flex justify-around w-11/12 sm:w-4/5 h-12 bg-three rounded-3xl border max-w-3xl border-four'>
            
            <img className='w-9 ml-1' src="../src/assets/search.svg" alt="search-icon" />

            {buttonVoiceSearch ? 
            <input className='w-4/5 ml-1 bg-transparent focus:outline-none placeholder-four text-white' type="text" placeholder="Nome do usuário" {...register("search")}/> 
            : 
            <input className='w-4/5 ml-1 bg-transparent focus:outline-none placeholder-four text-white' type="text" placeholder="Nome do usuário" value={searchText} {...register("search")}/>} 

            {buttonVoiceSearch ? 
            <button className='mr-1' type="button" onClick={searchByVoice}>
                <svg className='w-9 hover:fill-six transition' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#30363D"><path d="M480 633q-43 0-72-30.917-29-30.916-29-75.083V276q0-41.667 29.441-70.833Q437.882 176 479.941 176t71.559 29.167Q581 234.333 581 276v251q0 44.167-29 75.083Q523 633 480 633Zm0-228Zm-30 531V800q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571 742 635.5 680 700 618 700 527h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521 527V276q0-17-11.788-28.5Q497.425 236 480 236q-17.425 0-29.212 11.5Q439 259 439 276v251q0 19 11.5 32.5T480 573Z"/></svg>
            </button> 
            : 
            <button className='mr-1' type="button" onClick={stopListening}>
                <svg className='w-9 hover:fill-six transition' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#30363D"><path d="M330 726h300V426H330v300Zm150.266 250q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
            </button>}
        </div>
    )
}