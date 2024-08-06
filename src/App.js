import LandingCarousel from './Components/LandingPage/LandingCarousel';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingNavbar from './Components/LandingPage/LandingNavbar';
import LandingServices from './Components/LandingPage/LandingServices';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration';
import AdvocateLogin from './Components/Advocates/AdvocateLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import FormHead from './Components/Common/FormHead';
import UserNavbar from './Components/User/UserNavbar';
import UserHome from './Components/User/UserHome';
import AdminSidebar from './Components/Admin/AdminSidebar';
import AdminFooter from './Components/Admin/AdminFooter';
import UserFooter from './Components/Common/UserFooter';
import AdminMain from './Components/Admin/AdminMain';
import AdminNav from './Components/Admin/AdminNav';
import RecentEnquries from './Components/Admin/RecentEnquries';
import AdvocateRegister from './Components/Advocates/AdvocateRegister';
import AdvocateHome from './Components/Advocates/AdvocateHome';
import ViewProfile_AR from './Components/Admin/ViewProfile_AR';
import AdvocateNavbar from './Components/Advocates/AdvocateNavbar';
import AdvocateEditProfile from './Components/Advocates/AdvocateEditProfile';
import AboutUs from './Components/LandingPage/AboutUs';

import ContactUs from './Components/LandingPage/ContactUs';

import UserProfile from './Components/User/UserProfile';
import UserAddCases from './Components/User/UserAddCases';
import UserViewRecentCases from './Components/User/UserViewRecentCases';
import AdvcateReg from './Components/Advocates/AdvocateReg';

import AdvocateViewCaseReq from './Components/Advocates/AdvocateViewCaseReq';
import AdvocateViewAllCaseReq from './Components/Advocates/AdvocateViewAllCaseReq';
import AdvocateViewSingleRecentCase from './Components/Advocates/AdvocateViewSingleRecentCase';

import UserNav_Main from './Components/User/UserNav_Main';
import User_ViewAllAdvocates from './Components/User/User_ViewAllAdvocates';
import User_ViewAdvocateDetail from './Components/User/User_ViewAdvocateDetail';
import User_RequestAdvocate from './Components/User/User_RequestAdvocate';
import User_BookAppoinment from './Components/User/User_BookAppoinment';
import Advocate_ViewCaseRequest from './Components/Advocates/Advocate_ViewCaseRequest';
import UserChattoAdvocate from './Components/User/UserChattoAdvocate';
import Advocate_PaymentRequest from './Components/Advocates/Advocate_PaymentRequest';
import Advocate_AddEvidence from './Components/Advocates/Advocate_AddEvidence';
import Advocate_UpdateCaseStatus from './Components/Advocates/Advocate_UpdateCaseStatus';

import Advocate_ViewJuAdvocateRequest from './Components/Advocates/Advocate_ViewJuAdvocateRequest';
import AdvocateViewAllRecentCases from './Components/Advocates/AdvocateViewAllRecentCases';
import AdvocateChat from './Components/Advocates/AdvocateChat';

import AdvocateViewJnrAdvReqProfile from './Components/Advocates/AdvocateViewJnrAdvReqProfile';

import AdvocateViewClientPaymentStatus from './Components/Advocates/AdvocateViewClientPaymentStatus';
import AdvAssignCasesToJnrAdv from './Components/Advocates/AdvAssignCasesToJnrAdv';
import AdvovatedViewApprovedJnrAdv from './Components/Advocates/AdvovatedViewApprovedJnrAdv';

import AdvocateViewCaseStatus from './Components/Advocates/AdvocateViewCaseStatus';
import AdvocateViewAddedEvidences from './Components/Advocates/AdvocateViewAddedEvidences';
import UserViewCaseUpdates from './Components/User/UserViewCaseUpdates';
import UserViewCaseStatus from './Components/User/UserViewCaseStatus';
import UserViewCaseEvidences from './Components/User/UserViewCaseEvidences';
import UserViewPaymentReq from './Components/User/UserViewPaymentReq';
import UserPayAdvReq from './Components/User/UserPayAdvReq';
import UserAddComplaints from './Components/User/UserAddComplaints';
import AdvocateAddComplaints from './Components/Advocates/AdvocateAddComplaints';

import AdvocateAddArticle from './Components/Advocates/AdvocateAddArticle';
import AdvocateViewArticles from './Components/Advocates/AdvocateViewArticles';
import AdvocateEditArticle from './Components/Advocates/AdvocateEditArticle';
import AdvocateForgotPassword from './Components/Advocates/AdvocateForgotPassword';
import UserForgotPassword from './Components/User/UserForgotPassword';

import AdvocateViewInternReq from './Components/Advocates/AdvocateViewInternReq';
import AdvocateViewApprovedInterns from './Components/Advocates/AdvocateViewApprovedInterns';
import AdvocateViewSingleIntern from './Components/Advocates/AdvocateViewSingleIntern';

import UserChatToJuniorAdv from './Components/User/UserChatToJuniorAdv';
import AdvocateViewResourceReq from './Components/Advocates/AdvocateViewResourceReq';

import BarcouncilNav from './Components/BarCouncil/BarcouncilNav';
import BarCouncilMain from './Components/BarCouncil/BarCouncilMain';
import BarCouncilViewAllCase from './Components/BarCouncil/BarCouncilViewAllCase';
import BarCouncilViewAllCaseDeatils from './Components/BarCouncil/BarCouncilViewAllCaseDeatils';
import BarCouncilDbarViewAdvocate from './Components/BarCouncil/BarCouncilDbarViewAdvocate';
import BarCouncilDbarViewAdocateDetails from './Components/BarCouncil/BarCouncilDbarViewAdocateDetails';
import BarCouncilLogin from './Components/BarCouncil/BarCouncilLogin';
import AdvocateViewAppeals from './Components/Advocates/AdvocateViewAppeals';
import UserViewBlogs from './Components/User/UserViewBlogs';



function App() {
  return (
    <BrowserRouter basename="legal_practice">
      <div>
        <Routes>
          {/* Client routes */}
          <Route path="/" element={(<LandingNavbar />, <LandingCarousel />)} />
          <Route path="/UserLogin" element={[<LandingNavbar />, <FormHead title="Home / User Login" />, <UserLogin />,<AdminFooter/>]} />
          <Route path="/Userforgot" element={[<LandingNavbar />, <UserForgotPassword />,<AdminFooter/>]} />
          <Route path="/UserRegistration" element={[<LandingNavbar />, <FormHead title="User Registration Form" />, <UserRegistration />,<AdminFooter/>]} />
          <Route path="/user_home" element={[<UserNavbar />, <UserHome />,<AdminFooter/>]} />
          <Route path="/client-viewblogs" element={[<UserNavbar />,<FormHead title="View Articles" />, <UserViewBlogs />,<AdminFooter/>]} />
          <Route path="/user_profile" element={[<UserNavbar />, <FormHead title="Client Profile View" />,<UserProfile/>,<AdminFooter/>]} />
          <Route path="/user_add_case" element={[<UserNavbar />, <FormHead title="Add Case Details" />,<UserAddCases/>,<AdminFooter/>]} />
          <Route path="/user_view_recent_cases" element={[<UserNavbar />, <FormHead title="Recent Cases" />,<UserViewRecentCases/>,<AdminFooter/>]} />
          <Route path="/client-viewalladvocate" element={[<UserNavbar />,<FormHead title="View All Advocates" />,<User_ViewAllAdvocates />,<AdminFooter/>]} />
          <Route path="/user_view_advocate_detail/:id" element={[<UserNavbar />,<User_ViewAdvocateDetail />,<AdminFooter/>]} />
          <Route path="/user-requestanadvocate/:id" element={[<UserNavbar />,<FormHead title="View Advocates" />,<User_RequestAdvocate />,<AdminFooter/>]} />
          <Route path="/user_bookappoinment/:id/:cid" element={[<UserNavbar />,<FormHead title="Advocate Details" />,<User_BookAppoinment />,<AdminFooter/>]} />
          <Route path="/user_chat_to_advocate/:aid" element={[<UserNavbar />,<FormHead title="Chat" />,<UserChattoAdvocate />,<AdminFooter/>]} />
          <Route path="/user_view_case_updations/:id" element={[<UserNavbar />,<FormHead title="Case Details" />,<UserViewCaseUpdates />,<AdminFooter/>]} />
          <Route path="/user_view_case_status/:id" element={[<UserNavbar />,<FormHead title="Case Status" />,<UserViewCaseStatus />,<AdminFooter/>]} />
          <Route path="/user_view_added_evidences/:id" element={[<UserNavbar />,<FormHead title="Evidences" />,<UserViewCaseEvidences />,<AdminFooter/>]} />
          <Route path="/user_view_adv_payment_req/:id" element={[<UserNavbar />,<FormHead title="Payment" />,<UserViewPaymentReq />,<AdminFooter/>]} />
          <Route path="/user_pay_adv_req/:id" element={[<UserNavbar />,<UserPayAdvReq />,<AdminFooter/>]} />
          <Route path="/user_add_complaint/:aid" element={[<UserNavbar />,<UserAddComplaints />,<AdminFooter/>]} />

          <Route path="/user_chat_to_jnr_adv/:cid" element={[<UserNavbar />,<UserChatToJuniorAdv />,<AdminFooter/>]} />


          {/* Advocate routes */}
          <Route path="/AdvcateReg" element={[<LandingNavbar />, <AdvcateReg />]} />
          <Route path="/AdvocateLogin" element={[<LandingNavbar />, <AdvocateLogin />, <AdminFooter />]} />
          <Route path="/AdvocateForgot" element={[<LandingNavbar />, <AdvocateForgotPassword />, <AdminFooter />]} />
          <Route path="/AdvcateRegister" element={[<LandingNavbar />, <AdvocateRegister />, <AdminFooter />]} />
          <Route path="/advocate_home" element={[<AdvocateNavbar />, <AdvocateHome />, <AdminFooter />]} />
          <Route path="/advocate_edit_profile/:id" element={[<AdvocateNavbar />,<FormHead title="Advocate Profile View" />, <AdvocateEditProfile />,<AdminFooter />]} />
          {/* <Route path="/advocate_view_all_case_req" element={[<AdvocateNavbar />,<FormHead title="Case Requests" />, <AdvocateViewAllCaseReq />,<AdminFooter />]} /> */}
          {/* <Route path="/advocate_viewcasereq" element={[<AdvocateNavbar />, <Advocate_ViewCaseRequest />, <AdminFooter />]} /> */}
          <Route path="/advocate_view_intern_req" element={[<AdvocateNavbar />, <AdvocateViewInternReq />, <AdminFooter />]} />
          <Route path="/advocate_view_single_case_req/:id" element={[<AdvocateNavbar />,<FormHead title="Case Requests" />, <AdvocateViewCaseReq />,<AdminFooter />]} />
          <Route path="/advocate_view_all_recent_case" element={[<AdvocateNavbar />,<FormHead title="Recent Cases" />, <AdvocateViewAllRecentCases />,<AdminFooter />]} />
          <Route path="/advocate_view_all_interns" element={[<AdvocateNavbar />,<FormHead title="Interns" />, <AdvocateViewApprovedInterns />,<AdminFooter />]} />
          <Route path="/advocate_view_single_recent_case/:id" element={[<AdvocateNavbar />,<FormHead title="Case Tittle" />, <AdvocateViewSingleRecentCase />,<AdminFooter />]} />
          
          <Route path="/advocate_chat" element={[<AdvocateNavbar />,<FormHead title="Chat" />, <AdvocateChat type='noChat' />,<AdminFooter />]} />
          <Route path="/advocate_single_chat/:uid/:type" element={[<AdvocateNavbar />,<FormHead title="Chat" />, <AdvocateChat />,<AdminFooter />]} />

          <Route path="/advocate_viewcasereq" element={[<AdvocateNavbar />,<FormHead title="Case Request" />, <Advocate_ViewCaseRequest />, <AdminFooter />]} />
          <Route path="/advocate_paymentreq/:id" element={[<AdvocateNavbar />,<FormHead title="Payment Request" />, <Advocate_PaymentRequest />, <AdminFooter />]} />
          <Route path="/advocate_addevidence/:id" element={[<AdvocateNavbar />,<FormHead title="Add Evidence" />, <Advocate_AddEvidence />, <AdminFooter />]} />
          <Route path="/advocate_view_added_evidences/:id" element={[<AdvocateNavbar />, <AdvocateViewAddedEvidences />, <AdminFooter />]} />
          <Route path="/advocate_update_casestatus/:id" element={[<AdvocateNavbar />,<FormHead title="Case Status" />, <Advocate_UpdateCaseStatus />, <AdminFooter />]} />
          <Route path="/advocate_viewjuadvocatereq" element={[<AdvocateNavbar />, <Advocate_ViewJuAdvocateRequest />, <AdminFooter />]} />
          <Route path="/advocate_view_jnr_adv_profile_req/:id/:aid" element={[<AdvocateNavbar />, <AdvocateViewJnrAdvReqProfile value='request' />, <AdminFooter />]} />
          <Route path="/advocate_view_intern_profile/:id" element={[<AdvocateNavbar />, <AdvocateViewSingleIntern />, <AdminFooter />]} />
          <Route path="/advocate_view_client_payment_status/:id" element={[<AdvocateNavbar />, <AdvocateViewClientPaymentStatus />, <AdminFooter />]} />
          <Route path="/advocate_view_case_status/:id" element={[<AdvocateNavbar />, <AdvocateViewCaseStatus />, <AdminFooter />]} />
          <Route path="/advocate_assign_cases_to_jnradv/:jid" element={[<AdvocateNavbar />,<FormHead title="Advocate Assign Cases" />, <AdvAssignCasesToJnrAdv />, <AdminFooter />]} />
          <Route path="/advocate_view_all_jnr_adv" element={[<AdvocateNavbar />, <AdvovatedViewApprovedJnrAdv />, <AdminFooter />]} />
          <Route path="/advocate_add_complaints" element={[<AdvocateNavbar />,<FormHead title="Add Appeal" />, <AdvocateAddComplaints />, <AdminFooter />]} />
          <Route path="/advocate_add_articles" element={[<AdvocateNavbar />,<FormHead title="Add Articles" />, <AdvocateAddArticle />, <AdminFooter />]} />
          <Route path="/advocate_view_articles" element={[<AdvocateNavbar />,<FormHead title="View Articles" />, <AdvocateViewArticles />, <AdminFooter />]} />
          <Route path="/advocate_edit_articles/:id" element={[<AdvocateNavbar />, <AdvocateEditArticle />, <AdminFooter />]} />
          <Route path="/advocate_view_case_req_access" element={[<AdvocateNavbar />, <AdvocateViewResourceReq />, <AdminFooter />]} />
          <Route path="/advocate_view_appeals" element={[<AdvocateNavbar />,<FormHead title="View Appeals" />, <AdvocateViewAppeals />, <AdminFooter />]} />


          {/* Bar council routes */}
          <Route path="/BarCouncilLogin" element={[<LandingNavbar />, <BarCouncilLogin />,<AdminFooter/>]} />
          <Route path="/BarCouncil-main" element={<BarCouncilMain/>} /> 
          <Route path="/BarCouncil-dashboard" element={[<BarcouncilNav/>,<BarCouncilMain data='dashboard'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_advocates" element={[<BarcouncilNav/>,<BarCouncilMain data='viewadvocate'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_details/:id/:type" element={[<BarcouncilNav/>,<BarCouncilMain data='details'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_complines" element={[<BarcouncilNav/>,<BarCouncilMain data='complaints'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_case" element={[<BarcouncilNav/>,<BarCouncilMain data='cases'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_detils/:id" element={[<BarcouncilNav/>,<BarCouncilMain data='case_details'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_d-baradvocate" element={[<BarcouncilNav/>,<BarCouncilMain data='view_d-bar_advocate'/>,<AdminFooter/>]} />
          <Route path="/BarCouncil_view_d-baradvocate_details" element={[<BarcouncilNav/>,<BarCouncilMain data='view_d-bar_advocate_details'/>,<AdminFooter/>]} />
          <Route path="/add_legal_policies" element={[<BarcouncilNav/>,<BarCouncilMain data='add_legal'/>,<AdminFooter/>]} />
          <Route path="/view_all_appeals" element={[<BarcouncilNav/>,<BarCouncilMain data='appeals'/>,<AdminFooter/>]} />

          {/* Admin routes */}
          <Route path="/AdminLogin" element={[<LandingNavbar />, <FormHead title="Admin Login" />, <AdminLogin />, <AdminFooter />]} />
          <Route path="/admin-dashboard" element={[<AdminNav />, <AdminMain data="admindashboard" />, <AdminFooter />]} />
          <Route path="/admin-viewalladvocates" element={[<AdminNav />, <AdminMain data="adminviewalladvocates" />, <AdminFooter />]} />
          <Route path="/admin-viewallusers" element={[<AdminNav />, <AdminMain data="adminviewallusers" />, <AdminFooter />]} />
          <Route path="/admin_view_single_user/:id" element={[<AdminNav />, <AdminMain data="singleUser" />, <AdminFooter />]} />
          <Route path="/adminviewadvocaterequest" element={[<AdminNav />, <AdminMain data="approvereject" />, <AdminFooter />]} />
          <Route path="/adminviewrequest/:id" element={[<AdminNav />, <AdminMain data="adminviewrequest" />, <AdminFooter />]} />
          <Route path="/admin_view_single_advocate/:id" element={[<AdminNav />, <AdminMain data="adminviewsingleadvocate" />, <AdminFooter />]} />
          <Route path="/adminsidebar" element={<AdminSidebar />} />
          <Route path="/adminfooter" element={<AdminFooter />} /> 
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/recentenquries" element={<RecentEnquries />} />
          <Route path="/adminviewrequest/:id" element={<ViewProfile_AR />} />
          <Route path="/admin_view_intern_adv_req" element={[<AdminNav />, <AdminMain data="approverejectIntern" />, <AdminFooter />]} />
          <Route path="/admin_view_intern_detailed_req/:id" element={[<AdminNav />, <AdminMain data="interndetailreq" />, <AdminFooter />]} />
          <Route path="/admin_view_intern_details/:id" element={[<AdminNav />, <AdminMain data="interndetails" />, <AdminFooter />]} />
          <Route path="/admin_view_approved_interns" element={[<AdminNav />, <AdminMain data="approvedInterns" />, <AdminFooter />]} />
          <Route path="/admin_view_complaints" element={[<AdminNav />, <AdminMain data="complaints" />, <AdminFooter />]} />
          <Route path="/admin_view_cases" element={[<AdminNav />, <AdminMain data="viewCases" />, <AdminFooter />]} />
          <Route path="/admin_view_single_case/:id" element={[<AdminNav />, <AdminMain data="viewSingleCase" />, <AdminFooter />]} />
          <Route path="/admin_view_case_status/:id" element={[<AdminNav />, <AdminMain data="status" />, <AdminFooter />]} />
          <Route path="/admin_view_added_evidences/:id" element={[<AdminNav />, <AdminMain data="evidence" />, <AdminFooter />]} />
          <Route path="/admin_view_client_payment_status/:id" element={[<AdminNav />, <AdminMain data="payment" />, <AdminFooter />]} />


          <Route path="/adminviewjunioradvocaterequest" element={[<AdminNav />,<AdminMain data='approverejectjunioradvocate'/>, <AdminFooter />]} />
          <Route path="/adminviewalljunioradvocates" element={[<AdminNav />,<AdminMain data="adminviewalljunioradvocates"/>, <AdminFooter />]} />
          <Route path="/JuniorAdvocateViewProfile/:id" element={[<AdminNav />,<AdminMain data='adminviewprofile-alladvocates'/>,<AdminFooter />]} />
          <Route path="/JuniorAdvocate-profile-request/:id" element={[<AdminNav />,<AdminMain data='adminviewprofile-requests'/>,<AdminFooter />]} />

          
          {/* Landing Page routes */}
          <Route path="/aboutus" element={[<LandingNavbar />,<AboutUs />,<AdminFooter />]} />
          <Route path="/services" element={[<LandingNavbar />,<LandingServices />,<AdminFooter />]} />
          <Route path="/contactus" element={[<LandingNavbar />,<ContactUs />,<AdminFooter />]} />




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
