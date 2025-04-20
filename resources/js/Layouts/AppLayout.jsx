// Import Sidebar component
import Sidebar from '../Components/Sidebar';

const AppLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default AppLayout;