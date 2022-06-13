import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import APIController from '../APIController';

const SKIN_URL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'

export default function ChampionSummaryPage() {
    let params = useParams()
    const championName = params.championName
    const [summaryChampion, setSummaryChampion] = useState()

    useEffect(() => {
        APIController
            .getInfoChampionByName(championName)
            .then((response) => {
                console.log(response)
                setSummaryChampion(response)
            })
    }, [])

    return (
        <div>
            {summaryChampion &&
                <>
                    <h1>
                        Champion Name : {summaryChampion.name} - {summaryChampion.title}
                    </h1>
                    <h2>
                        Lore:
                    </h2>
                    <p
                        style={{
                            fontSize: "20px"
                        }}

                    >
                        {summaryChampion.lore}
                    </p>

                    <h2>
                        Stat at level 1:
                    </h2>

                    <ul style={{
                        fontSize: '20px'
                    }}>
                        <li>Armor: {summaryChampion.stats.armor}</li>
                        <li>HP: {summaryChampion.stats.hp}</li>
                        <li>Move speed: {summaryChampion.stats.movespped}</li>
                        <li>Attack Damage: {summaryChampion.stats.attackdamage}</li>
                        <li>Attack Spped: {summaryChampion.stats.attackspeed} </li>
                    </ul>

                    <h2>
                        Enemy Tip:
                    </h2>
                    <ul>
                        {summaryChampion.enemyTips.map((tip, index) => {
                            return (
                                <li
                                    style={{
                                        fontSize: "16px"
                                    }}
                                >
                                    {tip}
                                </li>
                            )
                        })}
                    </ul>
                    <h2>
                        Ally Tip:
                    </h2>
                    <ul>
                        {summaryChampion.allyTips.map((tip, index) => {
                            return (
                                <li
                                    style={{
                                        fontSize: "16px"
                                    }}
                                >
                                    {tip}
                                </li>
                            )
                        })}
                    </ul>
                    <h2>
                        Skins:
                        <br></br>
                        <br></br>
                        {summaryChampion.skins.map((skin) => {
                            return (
                                <div
                                    style={{
                                        textAlign: "center"
                                    }}
                                >
                                    <img
                                        key={skin.id}
                                        src={SKIN_URL + `${summaryChampion.name}_${skin.num}.jpg`}
                                        height="550px"
                                    />
                                    <p
                                        style={{
                                            fontSize: "20px"
                                        }}>
                                        {skin.name}
                                    </p>
                                </div>

                            )
                        })}
                    </h2>
                </>
            }
        </div>
    )
}
