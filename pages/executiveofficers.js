import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Header3 from '../components/Layout/components/Header3/Header3'
import ExecutiveOfficers from '../components/Layout/components/ExecutiveOfficers/ExecutiveOfficers'
import CTA from '../components/Layout/components/CTA/CTA'
import Footer from '../components/Layout/components/Footer/Footer'


export default function ExecutiveOfficers1() {
  return (
    <>
    <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
    
        <a href="/" className="logo mr-auto"><img src="assets/img/logo3.jpg" alt="" className="img-fluid"/></a>
         
          <nav id="nav-menu" className="nav-menu d-none d-lg-flex">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/investor">Investor Relations</a></li>
    
              <li className="drop-down active"><a href="/regulardirectors">Meet the Team</a>
                <ul>
                  <li className="drop-down"><a href="/regulardirectors">Board of Directors</a>
                    <ul>
                      <li><a href="/regulardirectors">Regular Directors</a></li>
                      <li><a href="/independentdirectors">Independent Directors</a></li>
                    </ul>
                  </li>
                  <li className="active"><a href="/executiveofficers">Executive Officers</a></li>
                </ul>
              </li>
    
              <li className="drop-down"><a href="/downloadables">Downloadables</a>
                <ul>
                  <li className="drop-down"><a href="/downloadables">Corporate Governance</a>
                    <ul>
                      <li><a href="/downloadables">MANUAL ON CORPORATE GOVERNANCE</a></li>
                      <li><a href="/downloadables">CODE OF BUSINESS CONDUCT AND ETHICS</a></li>
                      <li><a href="/downloadables">ANNUAL CORPORATE GOVERNANCE REPORT</a></li>
                      <li><a href="/downloadables">BOARD COMMITTEES</a></li>
                      <li><a href="/downloadables">CORPORATE SOCIAL RESPONSIBILITY</a></li>
                      <li><a href="/downloadables">ENTERPRISE RISK MANAGEMENT</a></li>
                      <li><a href="/downloadables">COMPANY POLICIES</a></li>
                    </ul>
                  </li>
                  <li className="drop-down"><a href="/companydisclosures">Company Disclosures</a>
                    <ul>
                      <li><a href="/companydisclosures">SEC FILINGS</a></li>
                      <li><a href="/companydisclosures">NOTICE OF ANNUAL OR SPECIAL STOCKHOLDER'S MEETING</a></li>
                      <li><a href="/companycisclosures">MINUTES OF ALL GENERAL OR SPECIAL STOCKHOLDERS'S MEETINGS </a></li>
                    </ul>
                  </li>
                  <li><a href="/others">Others</a></li>
                </ul>
              </li>
              
            </ul>
          </nav>
    
          <a href="/#contact" className="get-started-btn scrollto">Contact Us</a>
    
        </div>
      </header>
    <Header3/>
    <main id="main">
    <ExecutiveOfficers/>
    <CTA/>
    </main>
    <Footer />

    <a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
        </>
    )
}