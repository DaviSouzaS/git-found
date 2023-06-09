import { Footer } from "../../components/footer";
import { SearchBar } from "../../components/SearchBar";
import { Button } from "../../components/Button";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { HistoricModal } from "../../components/HistoricModal";
import { iSearch } from "../../contexts/types";

export const InitialPage = (): JSX.Element => {
  const { searchError, openHistoricModal, openModal, search } =
    useContext(UserContext);

  const formSchema = yup.object().shape({
    search: yup.string().required("Insira o nome de algum usuário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: FieldValues = useForm<iSearch>({
    resolver: yupResolver(formSchema),
  });

  return (
    <div className="flex flex-col justify-between h-screen">
      {openModal && <HistoricModal />}
      <div className="flex flex-col">
        <div className="flex justify-center items-center mt-10">
          <img
            className="w-32 sm:w-60"
            src="/logo-gitfound.png"
            alt="gitfound-logo"
          />
          <h1 className="text-white text-4xl sm:text-6xl font-inter font-bold">
            Git Found
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(search)}
          className="flex flex-col items-center mt-3"
        >
          <SearchBar register={register} />
          {searchError !== 404 && searchError !== 403 && <p className="text-white p-1">{errors.search?.message}</p>}
          {searchError === 404 && (
            <p className="text-white p-1">Usuário não encontrado</p>
          )}
          {searchError === 403 && (
            <p className="text-white text-sm p-1 text-center">Número limite de pesquisas atingido!<br/> Você pode fazer até 60 pesquisas por hora</p>
          )}
          <div className="mt-7 flex gap-8">
            <Button type="submit" content="Pesquisar" />
            <Button
              type="button"
              content="Histórico"
              onclick={openHistoricModal}
            />
          </div>
        </form>

        <div className="flex justify-center mt-11">
          <p className="text-white font-bold text-xs sm:text-base">
            Encontre usuários do Git Hub de maneira rápida
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
