import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Tags, 
  Users, 
  Settings, 
  BarChart3,
  Image,
  Lock
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const dashboardItems = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Overview of site analytics and metrics",
      href: "/admin/dashboard",
    },
    {
      icon: FileText,
      title: "Posts",
      description: "Create, edit, and manage articles",
      href: "/admin/posts",
    },
    {
      icon: FolderOpen,
      title: "Categories",
      description: "Manage news categories and subcategories",
      href: "/admin/categories",
    },
    {
      icon: Tags,
      title: "Tags",
      description: "Organize content with tags",
      href: "/admin/tags",
    },
    {
      icon: Image,
      title: "Media",
      description: "Upload and manage images",
      href: "/admin/media",
    },
    {
      icon: Users,
      title: "Users",
      description: "Manage editors and staff accounts",
      href: "/admin/users",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "View detailed traffic reports",
      href: "/admin/analytics",
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Configure site settings",
      href: "/admin/settings",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | FlipSide24</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-headline font-bold mb-4">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your news content, users, and site settings.
            </p>
          </div>

          {/* Login Required Message */}
          <div className="bg-card border border-border rounded-sm p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Authentication Required</h2>
                <p className="text-muted-foreground">
                  The admin dashboard requires login to access. Connect to Lovable Cloud to enable authentication.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/admin/login">Admin Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Back to Site</Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Articles", value: "12", change: "+2 this week" },
              { label: "Total Views", value: "284K", change: "+15% from last month" },
              { label: "Active Users", value: "3", change: "2 editors, 1 staff" },
              { label: "Comments", value: "0", change: "Pending moderation" },
            ].map((stat, index) => (
              <div key={index} className="bg-card border border-border p-6 rounded-sm">
                <p className="text-muted-foreground text-sm">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Dashboard Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardItems.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors group cursor-not-allowed opacity-75"
              >
                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Backend Integration Notice */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-sm p-6">
            <h3 className="font-headline font-bold text-lg mb-2">
              Enable Full CMS Functionality
            </h3>
            <p className="text-muted-foreground mb-4">
              To enable complete content management features including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
              <li>• User authentication (Editor & Staff roles)</li>
              <li>• CRUD operations for posts</li>
              <li>• Image upload and optimization</li>
              <li>• Draft/Published/Scheduled posts</li>
              <li>• Category and tag management</li>
              <li>• Comment moderation</li>
              <li>• SEO fields (meta title, description)</li>
              <li>• Analytics and visitor tracking</li>
            </ul>
            <p className="text-sm text-foreground">
              Connect <strong>Lovable Cloud</strong> to enable all these features with a PostgreSQL database, 
              authentication system, and serverless functions.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
