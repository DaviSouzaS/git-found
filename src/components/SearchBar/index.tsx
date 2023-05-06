import 'regenerator-runtime/runtime'
import { useContext, useState } from "react"
import { FieldValues } from "react-hook-form"
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition"
import { UserContext } from '../../contexts/UserContext'

export const SearchBar = ({register}: FieldValues) => {

    const { transcript, resetTranscript,  browserSupportsSpeechRecognition} = useSpeechRecognition()

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
        <div>
            
            {buttonVoiceSearch ? <button type="button" onClick={searchByVoice}><img src="../src/assets/microfone_icon.svg" alt="microfone-icon" /></button> : 
            <button type="button" onClick={stopListening}><img src="../src/assets/stop_icon.svg" alt="stop-icon" /></button>}
            <img src="../src/assets/search.svg" alt="search-icon" />
            {buttonVoiceSearch ? <input type="text" placeholder="Nome do usuário" {...register("search")}/> : 
            <input type="text" placeholder="Nome do usuário" value={searchText} {...register("search")}/>}

        </div>
    )
}