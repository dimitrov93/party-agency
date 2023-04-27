import React, { useEffect, useState } from "react";
import "./card.css";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import CardItem from "./CardItem/CardItem";
import FooterContainer from "./FooterContainer/FooterContainer";
import { cardInfo } from "./data";
import * as cardsService from "../../services/cardsService";
const Card = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const [cards, setCards] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const [invitationsRes, tablesRes, cardsRes] = await Promise.all([
          cardsService.getInvitations(),
          cardsService.getTables(),
          cardsService.getCards(),
        ]);

        setInvitations(invitationsRes);
        setTables(tablesRes);
        setCards(cardsRes);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCardsData();
  }, []);

  return (
    <section className="container">
      {user.email && (
        <div className="hidden_content">
          <Link to={`${pathname}/add`}>
            <button className="hidden__btn">
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      )}

      <div className="card__header">
        <div className="line"></div>
        <div className="text">
          Покани за гости, картички, настанително табло
        </div>
        <div className="line"></div>
      </div>

      <div className="card__body">
        {cardInfo.map((item) => (
          <CardItem key={item.id} text={item.text} />
        ))}
      </div>

      <div className="card__footer">
        <FooterContainer data={invitations} isLoading={isLoading} />
        <FooterContainer data={tables} isLoading={isLoading} />
        <FooterContainer data={cards} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default Card;
