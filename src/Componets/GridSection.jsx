import React from "react";
import "./GridSection.css"; 

const cards = [
    { img: "/IMAGE.png", title: "GIR: One Year In", category: "CASE STUDY" },
    { img: "/IMAGE2.png", title: "Introducing Onsen", category: "NEW ADDITIONS" },
    { img: "/IMAGE3.png", title: "Selling Your Shopify Brand: An Introduction", category: "MERGERS & ACQUISITIONS 101" },
    { img: "/IMAGE4.png", title: "5 Reasons We Are Optimistic for 2023", category: "MERGERS & ACQUISITIONS 101" },
    { img: "/IMAGE5.png", title: "Why Right Now is a Great Time to Sell Your Brand", category: "MERGERS & ACQUISITIONS 101" },
    { img: "/IMAGE3.png", title: "Selling Your Shopify Brand: Week 1", category: "MERGERS & ACQUISITIONS 101" },
    { img: "/IMAGE7.png", title: "Pattern’s 2022 Update", category: "THOUGHT LEADERSHIP" },
    { img: "/IMAGE8.png", title: "Introducing Yield", category: "NEW ADDITIONS" },
    { img: "/IMAGE9.png", title: "Introducing Poketo", category: "NEW ADDITIONS" }
];

const GridSection = () => {
    return (
        <section className="grid-section">
            <div className="grid-header">
                <p className="grid-text">
                    Explore the brands joining <strong>Pattern Brands</strong>, the sales process & the founders behind them. 👇🏽
                </p>
            </div>
            <div className="grid-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.img} alt={card.title} className="card-img" />
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-category">{card.category}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GridSection;
