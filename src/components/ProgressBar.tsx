export type ProgressBarProps = {
    continuous?: boolean;
    valueNow?: number;
};

const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div className="progress">
            <div 
            className={
                (props.continuous) 
                ? 'progress-bar progress-bar-striped progress-bar-animated' 
                : 'progress-bar progress-bar-striped'} 
            style={{
                width: (props.continuous) 
                ? '100%' 
                : `${props.valueNow || 0}%`}} 
            role="progressbar" 
            aria-valuenow={props.valueNow} 
            aria-valuemin={0} 
            aria-valuemax={100}>Cargando...</div>
        </div>
    );
};

export default ProgressBar;