import { Footer } from "../../components/Footer";
import { SearchBar } from "../../components/SearchBar";
import { Button } from "../../components/Button";
import * as yup from 'yup';
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { HistoricModal } from "../../components/HistoricModal";

export const InitalPage = () => {

    const { getUserInfos, searchError, getUserRepositories, addUsersInHistoric, openHistoricModal, openModal, search }: any = useContext(UserContext)

    const formSchema = yup.object().shape({
        search: yup.string().required("Insira o nome de algum usuário"),
    });

    const { register, handleSubmit, formState: {errors} }: FieldValues = useForm({
        resolver: yupResolver(formSchema)
    });

  return (
    <>
        {openModal && <HistoricModal/>}
        <div>
            <img src="../src/assets/logo-gitfound.png" alt="gitfound-logo" />
            <h1>Git Found</h1>
        </div>

        <form onSubmit={handleSubmit(search)}>
            <SearchBar register={register}/>
            <p>{errors.search?.message}</p>
            {searchError === 404 && <p>Usuário não encontrado</p>}
            <div>
                <Button type="submit" content="Pesquisar"/>
                <Button type="button" content="Histórico" onclick={openHistoricModal}/>
            </div>
        </form>

        <p>Encontre usuários do Git Hub de maneira rápida</p>

        <Footer/>
    </>
  );
};
