import React from 'react'

function Faq() {
  return (
    <>
        <div className="fst pt-8">
            <h1 className='text-center uppercase tracking-widest'>Frequently Asked Questions</h1>
            <hr className='w-[4vw] mt-3 mx-auto border-[#6dc234]' />
            <h3 className='text-center text-4xl py-1'>General Queries</h3>
        </div>
        <h1 className="text-center font-bold text-xl py-7">Here are the most frequently asked travel queries with answers <br /> from Hotel staff.</h1>
        <div className="faqs pb-16">
            <div className="1">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Do you need assistance with cancellation or modification?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>If you need to cancel one of your upcoming trips, just sign in to your account and go to ‘My Trips’, select the booking/s you need to cancel and proceed.</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>If you need further assistance with your past or upcoming trips (cancellation, modification, token request / inquiry or share your experience), please complete the <a href="#form" className='text-[blue] underline'>form</a> here and we will get back to you as soon as possible.</h1>
            </div>
            <div className="2">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>How can I get in touch with a specific Hotel?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>If you’re looking for detailed information regarding one of our Hotel, or if you have specific questions about your stay, you can find the contact details for each location in the <span className='text-black font-lg'>Getting here</span> section on each destination page.</h1>
            </div>
            <div className="3">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Can I contact you via telephone?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Of course! You're welcome to reach out to us at the numbers listed at the bottom of This Page 👇 📞</h1>
            </div>
            <div className="4">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>How can I pay for my Hotel reservation?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>There are two online payment methods:</h1>
                <ul className='py-2 px-[80px] md:px-[120px] lg:px-[330px] text-sm font-medium text-[grey]'>
                    <li className='py-2'>A deposit or bank transfer before arrival: You will be asked to pay the full amount of the stay before arrival, or a percentage. The amount depends on the type of rate chosen.</li>
                    <li className='py-2'>A valid credit card (Visa, Mastercard or American Express). This payment option can be made in advance or upon arrival at Hotel, depending on the rate chosen.</li>
                </ul>
            </div>
            <div className="5">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>When can I check in? When do I need to check out?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Standard check-in time is at 15:00 and check-out time is at 11:00. Early check-in and late check-out can be requested at reception, preferably the early check-in before your arrival and the late check-out at the time of your arrival and not the day of your departure. The application of any of them is subject to availability and includes an additional cost.</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>In some of our destinations, we have reception staff 24/7, but in the case of arriving at a Hotel that has another schedule (until 10:00 PM/ 22:00 - 11:00 PM/23:00), travelers with confirmed reservations can count on the assistance of security staff who will provide the keys and help them to enter their rooms.</h1>
            </div>
            <div className="6">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>What types of rooms do you offer?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>We offer private, semi-private, and shared rooms. Private and semi-private rooms, such as Suites or Micro, are booked per rooms/night, not per guest. On the other hand, our dormitory rooms are booked per bed (per guest)/per night.</h1>
            </div>
            <div className="7">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Do you offer transportation services from the airport/from one Hotel to another?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>We offer transportation to and from the airport as well as transportation from one Hotel to another. To book a shuttle, and for more information, please go to the <span className='text-black font-lg'>Getting here</span> section on each destination page.</h1>
            </div>
            <div className="8">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Why are there different rates for the same accommodation type?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Depending on the season, you can find the following rates:</h1>
                <h1 className='py-2 px-[80px] md:px-[120px] lg:px-[330px] text-sm font-medium text-[grey]'>Non-refundable rate: This rate depends on the country and the season of the year; you will regularly see it under a promotion with no possibility of reimbursement.</h1>
                <h1 className='py-2 px-[80px] md:px-[120px] lg:px-[330px] text-sm font-medium text-[grey]'>Standard/Refundable rate: This rate offers regular cancellation or modification policies that may be refunded if the reservation is modified or canceled within the time indicated.</h1>
                <h1 className='py-2 px-[80px] md:px-[120px] lg:px-[330px] text-sm font-medium text-[grey]'>Standard rate with breakfast included: This rate, like the standard rate refundable, offers regular cancellation policies or modification possible to refund if the reservation is modified or canceled within the time indicated, with the difference that includes breakfast.</h1>
            </div>
            <div className="9">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Where can I leave my car if there is no parking lot?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Most of our Hotel have parking, but those who do not, offer the option of a public or private parking (with additional cost) at a short distance from the hotel. For more information, do not hesitate to contact us via our website chat or call us before arriving.</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>To contact the Reservation Center, you can find the number at the bottom of this page. To reach out to the Reception, you can find the contact details in the Getting here section on each destination page.</h1>
            </div>
            <div className="10">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Is it possible to add an extra bed to a private rooms?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Most private double rooms do not have space for an extra bed. To know if it is possible to add an extra bed to your reservation, do not hesitate to contact us via our website chat or call us before arriving.</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>To contact the Reservation Center, you can find the number at the bottom of this page. To reach out to the Reception, you can find the contact details in the Getting here section on each destination page.</h1>
            </div>
            <div className="11">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>Is Hotel child-friendly?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Hotel welcomes all family members, including the little ones! Depending on the policies of the Hotel where you stay, children can stay at no cost or pay a percentage of the fee. This varies according to the Hotel and the age of the child</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>It is very important to point out that children cannot stay in dormitories even if they are accompanied by an adult. The only way this is allowed is if the entire dormitory is reserved for the same family group.</h1>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>Also, please note that some Hotel destinations have a strong party culture, which means that noise levels can be higher and longer during weekends. In any case, we offer some rooms away from the social areas, and depending on the type of rooms booked and the availability, you can request a change directly to the Reception.</h1>
            </div>
            <div className="12">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>How do I book if I'm traveling in a group?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>To make a group booking request, please complete the <a href="#form" className='text-[blue] underline'>form here</a> and the team in charge will get in touch with you as soon as possible.</h1>
            </div>
            <div className="13">
                <h2 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-lg font-medium text-[black]'>How do I reach you if I need assistance with my booking?</h2>
                <h1 className='py-2 px-[50px] md:px-[100px] lg:px-[300px] text-sm font-medium text-[grey]'>You can call us at any of the numbers at the bottom of this page 👇 or please complete the <a href="#form" className='text-[blue] underline'>form here</a> We will gladly get back to you as soon as possible!</h1>
            </div>
        </div>
    </>
  )
}

export default Faq