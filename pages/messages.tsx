import Footer from '../src/components/_shared/footer/footer'
import Header from '../src/components/_shared/header/header'
import MessageDetailWithNoRoom from '../src/components/message-detail/message-detail-with-no-room'

function Chat() {
  return (
    <div className="page_container">
      <Header />
      <MessageDetailWithNoRoom />
      <Footer />
    </div>
  )
}

export default Chat
