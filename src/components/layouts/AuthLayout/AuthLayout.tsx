import PageHead from "@/components/commons/PageHead";
import { Fragment, ReactNode } from "react";

interface PropTypes {
    children: ReactNode;
    title?: string;
};

const AuthLayout = (props: PropTypes) => {
    const { children, title } = props;
    return (
        <div className="flex min-h-screen min-w-full items-center justify-center gap-10 py-10 lg:py-0">
            <PageHead title={title} />
            <section className="max-w-screen-3xl 3xl:container p-6">
                {children}
            </section>
        </div>
    );
}

export default AuthLayout;