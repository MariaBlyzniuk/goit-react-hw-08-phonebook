import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactsList/ContactsList";
import {  useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import { ContactTitle, Container, Title } from "./Contacts.styled";

    const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));
    return () => controller.abort();
    }, [dispatch]);
    return (
        <Container>
            <div>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactTitle>
                Contacts{' '}
                {isLoading && !error && (
                <Oval
                    height="20"
                    width="20"
                    color="lightblue"
                    ariaLabel="circles-loading"
                    visible={true}
                    wrapperStyle={{ display: 'inline' }}
                />
                )}
            </ContactTitle>
            <Filter />
            <ContactsList />
            </div>
        </Container>
    );
};

export default Contacts