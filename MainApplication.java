import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactPackage;
...
import com.wenkesj.voice.VoicePackage; // <------ Add this!
...

public class MainActivity extends Activity implements ReactApplication {
...
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new VoicePackage() // <------ Add this!
        );
    }
}